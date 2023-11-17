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
  };
  const [overallEnjoyment, setOverallEnjoyment] = React.useState(
    initialValues.overallEnjoyment
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bookRatingRecord
      ? { ...initialValues, ...bookRatingRecord }
      : initialValues;
    setOverallEnjoyment(cleanValues.overallEnjoyment);
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
