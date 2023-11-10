/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getBook } from "../graphql/queries";
import { updateBook } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BookUpdateForm(props) {
  const {
    id: idProp,
    book: bookModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    isbn: "",
    title: "",
    author: "",
    genre: [],
    numberInSeries: "",
    wordCount: "",
    description: "",
  };
  const [isbn, setIsbn] = React.useState(initialValues.isbn);
  const [title, setTitle] = React.useState(initialValues.title);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [genre, setGenre] = React.useState(initialValues.genre);
  const [numberInSeries, setNumberInSeries] = React.useState(
    initialValues.numberInSeries
  );
  const [wordCount, setWordCount] = React.useState(initialValues.wordCount);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bookRecord
      ? { ...initialValues, ...bookRecord }
      : initialValues;
    setIsbn(cleanValues.isbn);
    setTitle(cleanValues.title);
    setAuthor(cleanValues.author);
    setGenre(cleanValues.genre ?? []);
    setCurrentGenreValue("");
    setNumberInSeries(cleanValues.numberInSeries);
    setWordCount(cleanValues.wordCount);
    setDescription(cleanValues.description);
    setErrors({});
  };
  const [bookRecord, setBookRecord] = React.useState(bookModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getBook.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBook
        : bookModelProp;
      setBookRecord(record);
    };
    queryData();
  }, [idProp, bookModelProp]);
  React.useEffect(resetStateValues, [bookRecord]);
  const [currentGenreValue, setCurrentGenreValue] = React.useState("");
  const genreRef = React.createRef();
  const validations = {
    isbn: [],
    title: [],
    author: [],
    genre: [],
    numberInSeries: [],
    wordCount: [],
    description: [],
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
          isbn: isbn ?? null,
          title: title ?? null,
          author: author ?? null,
          genre: genre ?? null,
          numberInSeries: numberInSeries ?? null,
          wordCount: wordCount ?? null,
          description: description ?? null,
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
          await API.graphql({
            query: updateBook.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bookRecord.id,
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
      {...getOverrideProps(overrides, "BookUpdateForm")}
      {...rest}
    >
      <TextField
        label="Isbn"
        isRequired={false}
        isReadOnly={false}
        value={isbn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isbn: value,
              title,
              author,
              genre,
              numberInSeries,
              wordCount,
              description,
            };
            const result = onChange(modelFields);
            value = result?.isbn ?? value;
          }
          if (errors.isbn?.hasError) {
            runValidationTasks("isbn", value);
          }
          setIsbn(value);
        }}
        onBlur={() => runValidationTasks("isbn", isbn)}
        errorMessage={errors.isbn?.errorMessage}
        hasError={errors.isbn?.hasError}
        {...getOverrideProps(overrides, "isbn")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isbn,
              title: value,
              author,
              genre,
              numberInSeries,
              wordCount,
              description,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Author"
        isRequired={false}
        isReadOnly={false}
        value={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              author: value,
              genre,
              numberInSeries,
              wordCount,
              description,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              author,
              genre: values,
              numberInSeries,
              wordCount,
              description,
            };
            const result = onChange(modelFields);
            values = result?.genre ?? values;
          }
          setGenre(values);
          setCurrentGenreValue("");
        }}
        currentFieldValue={currentGenreValue}
        label={"Genre"}
        items={genre}
        hasError={errors?.genre?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("genre", currentGenreValue)
        }
        errorMessage={errors?.genre?.errorMessage}
        setFieldValue={setCurrentGenreValue}
        inputFieldRef={genreRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Genre"
          isRequired={false}
          isReadOnly={false}
          value={currentGenreValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.genre?.hasError) {
              runValidationTasks("genre", value);
            }
            setCurrentGenreValue(value);
          }}
          onBlur={() => runValidationTasks("genre", currentGenreValue)}
          errorMessage={errors.genre?.errorMessage}
          hasError={errors.genre?.hasError}
          ref={genreRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "genre")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Number in series"
        isRequired={false}
        isReadOnly={false}
        value={numberInSeries}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              author,
              genre,
              numberInSeries: value,
              wordCount,
              description,
            };
            const result = onChange(modelFields);
            value = result?.numberInSeries ?? value;
          }
          if (errors.numberInSeries?.hasError) {
            runValidationTasks("numberInSeries", value);
          }
          setNumberInSeries(value);
        }}
        onBlur={() => runValidationTasks("numberInSeries", numberInSeries)}
        errorMessage={errors.numberInSeries?.errorMessage}
        hasError={errors.numberInSeries?.hasError}
        {...getOverrideProps(overrides, "numberInSeries")}
      ></TextField>
      <TextField
        label="Word count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={wordCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              author,
              genre,
              numberInSeries,
              wordCount: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.wordCount ?? value;
          }
          if (errors.wordCount?.hasError) {
            runValidationTasks("wordCount", value);
          }
          setWordCount(value);
        }}
        onBlur={() => runValidationTasks("wordCount", wordCount)}
        errorMessage={errors.wordCount?.errorMessage}
        hasError={errors.wordCount?.hasError}
        {...getOverrideProps(overrides, "wordCount")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              author,
              genre,
              numberInSeries,
              wordCount,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
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
          isDisabled={!(idProp || bookModelProp)}
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
              !(idProp || bookModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
