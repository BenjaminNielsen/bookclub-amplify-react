/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getBookRating } from "../graphql/queries";
import { updateBookRating } from "../graphql/mutations";
const client = generateClient();
export default function BookRatingUpdateForm(props) {
  const {
    id: idProp,
    bookRating: bookRatingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    overallEnjoyment: "",
    pacing: "",
    prose: "",
    qualityOfDiscussion: "",
    storytelling: "",
    complexity: "",
    characterDevelopment: "",
    teaching: "",
    depthOfKnowledge: "",
    relevance: "",
    notes: "",
  };
  const [overallEnjoyment, setOverallEnjoyment] = React.useState(
    initialValues.overallEnjoyment
  );
  const [pacing, setPacing] = React.useState(initialValues.pacing);
  const [prose, setProse] = React.useState(initialValues.prose);
  const [qualityOfDiscussion, setQualityOfDiscussion] = React.useState(
    initialValues.qualityOfDiscussion
  );
  const [storytelling, setStorytelling] = React.useState(
    initialValues.storytelling
  );
  const [complexity, setComplexity] = React.useState(initialValues.complexity);
  const [characterDevelopment, setCharacterDevelopment] = React.useState(
    initialValues.characterDevelopment
  );
  const [teaching, setTeaching] = React.useState(initialValues.teaching);
  const [depthOfKnowledge, setDepthOfKnowledge] = React.useState(
    initialValues.depthOfKnowledge
  );
  const [relevance, setRelevance] = React.useState(initialValues.relevance);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bookRatingRecord
      ? { ...initialValues, ...bookRatingRecord }
      : initialValues;
    setOverallEnjoyment(cleanValues.overallEnjoyment);
    setPacing(cleanValues.pacing);
    setProse(cleanValues.prose);
    setQualityOfDiscussion(cleanValues.qualityOfDiscussion);
    setStorytelling(cleanValues.storytelling);
    setComplexity(cleanValues.complexity);
    setCharacterDevelopment(cleanValues.characterDevelopment);
    setTeaching(cleanValues.teaching);
    setDepthOfKnowledge(cleanValues.depthOfKnowledge);
    setRelevance(cleanValues.relevance);
    setNotes(cleanValues.notes);
    setErrors({});
  };
  const [bookRatingRecord, setBookRatingRecord] =
    React.useState(bookRatingModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBookRating.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBookRating
        : bookRatingModelProp;
      setBookRatingRecord(record);
    };
    queryData();
  }, [idProp, bookRatingModelProp]);
  React.useEffect(resetStateValues, [bookRatingRecord]);
  const validations = {
    overallEnjoyment: [],
    pacing: [],
    prose: [],
    qualityOfDiscussion: [],
    storytelling: [],
    complexity: [],
    characterDevelopment: [],
    teaching: [],
    depthOfKnowledge: [],
    relevance: [],
    notes: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          overallEnjoyment: overallEnjoyment ?? null,
          pacing: pacing ?? null,
          prose: prose ?? null,
          qualityOfDiscussion: qualityOfDiscussion ?? null,
          storytelling: storytelling ?? null,
          complexity: complexity ?? null,
          characterDevelopment: characterDevelopment ?? null,
          teaching: teaching ?? null,
          depthOfKnowledge: depthOfKnowledge ?? null,
          relevance: relevance ?? null,
          notes: notes ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateBookRating.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bookRatingRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BookRatingUpdateForm")}
      {...rest}
    >
      <TextField
        label="Overall enjoyment"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={overallEnjoyment}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              overallEnjoyment: value,
              pacing,
              prose,
              qualityOfDiscussion,
              storytelling,
              complexity,
              characterDevelopment,
              teaching,
              depthOfKnowledge,
              relevance,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.overallEnjoyment ?? value;
          }
          if (errors.overallEnjoyment?.hasError) {
            runValidationTasks("overallEnjoyment", value);
          }
          setOverallEnjoyment(value);
        }}
        onBlur={() => runValidationTasks("overallEnjoyment", overallEnjoyment)}
        errorMessage={errors.overallEnjoyment?.errorMessage}
        hasError={errors.overallEnjoyment?.hasError}
        {...getOverrideProps(overrides, "overallEnjoyment")}
      ></TextField>
      <TextField
        label="Pacing"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pacing}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing: value,
              prose,
              qualityOfDiscussion,
              storytelling,
              complexity,
              characterDevelopment,
              teaching,
              depthOfKnowledge,
              relevance,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.pacing ?? value;
          }
          if (errors.pacing?.hasError) {
            runValidationTasks("pacing", value);
          }
          setPacing(value);
        }}
        onBlur={() => runValidationTasks("pacing", pacing)}
        errorMessage={errors.pacing?.errorMessage}
        hasError={errors.pacing?.hasError}
        {...getOverrideProps(overrides, "pacing")}
      ></TextField>
      <TextField
        label="Prose"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={prose}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing,
              prose: value,
              qualityOfDiscussion,
              storytelling,
              complexity,
              characterDevelopment,
              teaching,
              depthOfKnowledge,
              relevance,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.prose ?? value;
          }
          if (errors.prose?.hasError) {
            runValidationTasks("prose", value);
          }
          setProse(value);
        }}
        onBlur={() => runValidationTasks("prose", prose)}
        errorMessage={errors.prose?.errorMessage}
        hasError={errors.prose?.hasError}
        {...getOverrideProps(overrides, "prose")}
      ></TextField>
      <TextField
        label="Quality of discussion"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qualityOfDiscussion}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing,
              prose,
              qualityOfDiscussion: value,
              storytelling,
              complexity,
              characterDevelopment,
              teaching,
              depthOfKnowledge,
              relevance,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.qualityOfDiscussion ?? value;
          }
          if (errors.qualityOfDiscussion?.hasError) {
            runValidationTasks("qualityOfDiscussion", value);
          }
          setQualityOfDiscussion(value);
        }}
        onBlur={() =>
          runValidationTasks("qualityOfDiscussion", qualityOfDiscussion)
        }
        errorMessage={errors.qualityOfDiscussion?.errorMessage}
        hasError={errors.qualityOfDiscussion?.hasError}
        {...getOverrideProps(overrides, "qualityOfDiscussion")}
      ></TextField>
      <TextField
        label="Storytelling"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={storytelling}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing,
              prose,
              qualityOfDiscussion,
              storytelling: value,
              complexity,
              characterDevelopment,
              teaching,
              depthOfKnowledge,
              relevance,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.storytelling ?? value;
          }
          if (errors.storytelling?.hasError) {
            runValidationTasks("storytelling", value);
          }
          setStorytelling(value);
        }}
        onBlur={() => runValidationTasks("storytelling", storytelling)}
        errorMessage={errors.storytelling?.errorMessage}
        hasError={errors.storytelling?.hasError}
        {...getOverrideProps(overrides, "storytelling")}
      ></TextField>
      <TextField
        label="Complexity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={complexity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing,
              prose,
              qualityOfDiscussion,
              storytelling,
              complexity: value,
              characterDevelopment,
              teaching,
              depthOfKnowledge,
              relevance,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.complexity ?? value;
          }
          if (errors.complexity?.hasError) {
            runValidationTasks("complexity", value);
          }
          setComplexity(value);
        }}
        onBlur={() => runValidationTasks("complexity", complexity)}
        errorMessage={errors.complexity?.errorMessage}
        hasError={errors.complexity?.hasError}
        {...getOverrideProps(overrides, "complexity")}
      ></TextField>
      <TextField
        label="Character development"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={characterDevelopment}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing,
              prose,
              qualityOfDiscussion,
              storytelling,
              complexity,
              characterDevelopment: value,
              teaching,
              depthOfKnowledge,
              relevance,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.characterDevelopment ?? value;
          }
          if (errors.characterDevelopment?.hasError) {
            runValidationTasks("characterDevelopment", value);
          }
          setCharacterDevelopment(value);
        }}
        onBlur={() =>
          runValidationTasks("characterDevelopment", characterDevelopment)
        }
        errorMessage={errors.characterDevelopment?.errorMessage}
        hasError={errors.characterDevelopment?.hasError}
        {...getOverrideProps(overrides, "characterDevelopment")}
      ></TextField>
      <TextField
        label="Teaching"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={teaching}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing,
              prose,
              qualityOfDiscussion,
              storytelling,
              complexity,
              characterDevelopment,
              teaching: value,
              depthOfKnowledge,
              relevance,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.teaching ?? value;
          }
          if (errors.teaching?.hasError) {
            runValidationTasks("teaching", value);
          }
          setTeaching(value);
        }}
        onBlur={() => runValidationTasks("teaching", teaching)}
        errorMessage={errors.teaching?.errorMessage}
        hasError={errors.teaching?.hasError}
        {...getOverrideProps(overrides, "teaching")}
      ></TextField>
      <TextField
        label="Depth of knowledge"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={depthOfKnowledge}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing,
              prose,
              qualityOfDiscussion,
              storytelling,
              complexity,
              characterDevelopment,
              teaching,
              depthOfKnowledge: value,
              relevance,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.depthOfKnowledge ?? value;
          }
          if (errors.depthOfKnowledge?.hasError) {
            runValidationTasks("depthOfKnowledge", value);
          }
          setDepthOfKnowledge(value);
        }}
        onBlur={() => runValidationTasks("depthOfKnowledge", depthOfKnowledge)}
        errorMessage={errors.depthOfKnowledge?.errorMessage}
        hasError={errors.depthOfKnowledge?.hasError}
        {...getOverrideProps(overrides, "depthOfKnowledge")}
      ></TextField>
      <TextField
        label="Relevance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={relevance}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing,
              prose,
              qualityOfDiscussion,
              storytelling,
              complexity,
              characterDevelopment,
              teaching,
              depthOfKnowledge,
              relevance: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.relevance ?? value;
          }
          if (errors.relevance?.hasError) {
            runValidationTasks("relevance", value);
          }
          setRelevance(value);
        }}
        onBlur={() => runValidationTasks("relevance", relevance)}
        errorMessage={errors.relevance?.errorMessage}
        hasError={errors.relevance?.hasError}
        {...getOverrideProps(overrides, "relevance")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing,
              prose,
              qualityOfDiscussion,
              storytelling,
              complexity,
              characterDevelopment,
              teaching,
              depthOfKnowledge,
              relevance,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || bookRatingModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || bookRatingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
