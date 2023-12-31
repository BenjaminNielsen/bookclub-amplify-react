/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createBookRating } from "../graphql/mutations";
const client = generateClient();
export default function BookRatingCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    isFiction: false,
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
  const [isFiction, setIsFiction] = React.useState(initialValues.isFiction);
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
    setOverallEnjoyment(initialValues.overallEnjoyment);
    setPacing(initialValues.pacing);
    setProse(initialValues.prose);
    setQualityOfDiscussion(initialValues.qualityOfDiscussion);
    setIsFiction(initialValues.isFiction);
    setStorytelling(initialValues.storytelling);
    setComplexity(initialValues.complexity);
    setCharacterDevelopment(initialValues.characterDevelopment);
    setTeaching(initialValues.teaching);
    setDepthOfKnowledge(initialValues.depthOfKnowledge);
    setRelevance(initialValues.relevance);
    setNotes(initialValues.notes);
    setErrors({});
  };
  const validations = {
    overallEnjoyment: [],
    pacing: [],
    prose: [],
    qualityOfDiscussion: [],
    isFiction: [],
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
          overallEnjoyment,
          pacing,
          prose,
          qualityOfDiscussion,
          isFiction,
          storytelling,
          complexity,
          characterDevelopment,
          teaching,
          depthOfKnowledge,
          relevance,
          notes,
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
            query: createBookRating.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BookRatingCreateForm")}
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
              isFiction,
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
              isFiction,
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
              isFiction,
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
              isFiction,
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
      <SwitchField
        label="Is fiction"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isFiction}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              overallEnjoyment,
              pacing,
              prose,
              qualityOfDiscussion,
              isFiction: value,
              storytelling,
              complexity,
              characterDevelopment,
              teaching,
              depthOfKnowledge,
              relevance,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.isFiction ?? value;
          }
          if (errors.isFiction?.hasError) {
            runValidationTasks("isFiction", value);
          }
          setIsFiction(value);
        }}
        onBlur={() => runValidationTasks("isFiction", isFiction)}
        errorMessage={errors.isFiction?.errorMessage}
        hasError={errors.isFiction?.hasError}
        {...getOverrideProps(overrides, "isFiction")}
      ></SwitchField>
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
              isFiction,
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
              isFiction,
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
              isFiction,
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
              isFiction,
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
              isFiction,
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
              isFiction,
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
              isFiction,
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
