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
import { generateClient } from "aws-amplify/api";
import { getSuggestionBooks } from "../graphql/queries";
import { updateSuggestionBooks } from "../graphql/mutations";
const client = generateClient();
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
export default function SuggestionBooksUpdateForm(props) {
  const {
    id: idProp,
    suggestionBooks: suggestionBooksModelProp,
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
    thumbnailUrl: "",
    author: [],
    genre: [],
    numberInSeries: "",
    rating: "",
    wordCount: "",
    description: "",
    likedBy: [],
    dislikedBy: [],
  };
  const [isbn, setIsbn] = React.useState(initialValues.isbn);
  const [title, setTitle] = React.useState(initialValues.title);
  const [thumbnailUrl, setThumbnailUrl] = React.useState(
    initialValues.thumbnailUrl
  );
  const [author, setAuthor] = React.useState(initialValues.author);
  const [genre, setGenre] = React.useState(initialValues.genre);
  const [numberInSeries, setNumberInSeries] = React.useState(
    initialValues.numberInSeries
  );
  const [rating, setRating] = React.useState(initialValues.rating);
  const [wordCount, setWordCount] = React.useState(initialValues.wordCount);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [likedBy, setLikedBy] = React.useState(initialValues.likedBy);
  const [dislikedBy, setDislikedBy] = React.useState(initialValues.dislikedBy);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = suggestionBooksRecord
      ? { ...initialValues, ...suggestionBooksRecord }
      : initialValues;
    setIsbn(cleanValues.isbn);
    setTitle(cleanValues.title);
    setThumbnailUrl(cleanValues.thumbnailUrl);
    setAuthor(cleanValues.author ?? []);
    setCurrentAuthorValue("");
    setGenre(cleanValues.genre ?? []);
    setCurrentGenreValue("");
    setNumberInSeries(cleanValues.numberInSeries);
    setRating(cleanValues.rating);
    setWordCount(cleanValues.wordCount);
    setDescription(cleanValues.description);
    setLikedBy(cleanValues.likedBy ?? []);
    setCurrentLikedByValue("");
    setDislikedBy(cleanValues.dislikedBy ?? []);
    setCurrentDislikedByValue("");
    setErrors({});
  };
  const [suggestionBooksRecord, setSuggestionBooksRecord] = React.useState(
    suggestionBooksModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSuggestionBooks.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSuggestionBooks
        : suggestionBooksModelProp;
      setSuggestionBooksRecord(record);
    };
    queryData();
  }, [idProp, suggestionBooksModelProp]);
  React.useEffect(resetStateValues, [suggestionBooksRecord]);
  const [currentAuthorValue, setCurrentAuthorValue] = React.useState("");
  const authorRef = React.createRef();
  const [currentGenreValue, setCurrentGenreValue] = React.useState("");
  const genreRef = React.createRef();
  const [currentLikedByValue, setCurrentLikedByValue] = React.useState("");
  const likedByRef = React.createRef();
  const [currentDislikedByValue, setCurrentDislikedByValue] =
    React.useState("");
  const dislikedByRef = React.createRef();
  const validations = {
    isbn: [],
    title: [{ type: "Required" }],
    thumbnailUrl: [],
    author: [],
    genre: [],
    numberInSeries: [],
    rating: [],
    wordCount: [],
    description: [],
    likedBy: [],
    dislikedBy: [{ type: "Required" }],
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
          title,
          thumbnailUrl: thumbnailUrl ?? null,
          author: author ?? null,
          genre: genre ?? null,
          numberInSeries: numberInSeries ?? null,
          rating: rating ?? null,
          wordCount: wordCount ?? null,
          description: description ?? null,
          likedBy: likedBy ?? null,
          dislikedBy,
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
            query: updateSuggestionBooks.replaceAll("__typename", ""),
            variables: {
              input: {
                id: suggestionBooksRecord.id,
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
      {...getOverrideProps(overrides, "SuggestionBooksUpdateForm")}
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
              thumbnailUrl,
              author,
              genre,
              numberInSeries,
              rating,
              wordCount,
              description,
              likedBy,
              dislikedBy,
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
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isbn,
              title: value,
              thumbnailUrl,
              author,
              genre,
              numberInSeries,
              rating,
              wordCount,
              description,
              likedBy,
              dislikedBy,
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
        label="Thumbnail url"
        isRequired={false}
        isReadOnly={false}
        value={thumbnailUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              thumbnailUrl: value,
              author,
              genre,
              numberInSeries,
              rating,
              wordCount,
              description,
              likedBy,
              dislikedBy,
            };
            const result = onChange(modelFields);
            value = result?.thumbnailUrl ?? value;
          }
          if (errors.thumbnailUrl?.hasError) {
            runValidationTasks("thumbnailUrl", value);
          }
          setThumbnailUrl(value);
        }}
        onBlur={() => runValidationTasks("thumbnailUrl", thumbnailUrl)}
        errorMessage={errors.thumbnailUrl?.errorMessage}
        hasError={errors.thumbnailUrl?.hasError}
        {...getOverrideProps(overrides, "thumbnailUrl")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              thumbnailUrl,
              author: values,
              genre,
              numberInSeries,
              rating,
              wordCount,
              description,
              likedBy,
              dislikedBy,
            };
            const result = onChange(modelFields);
            values = result?.author ?? values;
          }
          setAuthor(values);
          setCurrentAuthorValue("");
        }}
        currentFieldValue={currentAuthorValue}
        label={"Author"}
        items={author}
        hasError={errors?.author?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("author", currentAuthorValue)
        }
        errorMessage={errors?.author?.errorMessage}
        setFieldValue={setCurrentAuthorValue}
        inputFieldRef={authorRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Author"
          isRequired={false}
          isReadOnly={false}
          value={currentAuthorValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.author?.hasError) {
              runValidationTasks("author", value);
            }
            setCurrentAuthorValue(value);
          }}
          onBlur={() => runValidationTasks("author", currentAuthorValue)}
          errorMessage={errors.author?.errorMessage}
          hasError={errors.author?.hasError}
          ref={authorRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "author")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              thumbnailUrl,
              author,
              genre: values,
              numberInSeries,
              rating,
              wordCount,
              description,
              likedBy,
              dislikedBy,
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
              thumbnailUrl,
              author,
              genre,
              numberInSeries: value,
              rating,
              wordCount,
              description,
              likedBy,
              dislikedBy,
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
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              thumbnailUrl,
              author,
              genre,
              numberInSeries,
              rating: value,
              wordCount,
              description,
              likedBy,
              dislikedBy,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
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
              thumbnailUrl,
              author,
              genre,
              numberInSeries,
              rating,
              wordCount: value,
              description,
              likedBy,
              dislikedBy,
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
              thumbnailUrl,
              author,
              genre,
              numberInSeries,
              rating,
              wordCount,
              description: value,
              likedBy,
              dislikedBy,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              thumbnailUrl,
              author,
              genre,
              numberInSeries,
              rating,
              wordCount,
              description,
              likedBy: values,
              dislikedBy,
            };
            const result = onChange(modelFields);
            values = result?.likedBy ?? values;
          }
          setLikedBy(values);
          setCurrentLikedByValue("");
        }}
        currentFieldValue={currentLikedByValue}
        label={"Liked by"}
        items={likedBy}
        hasError={errors?.likedBy?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("likedBy", currentLikedByValue)
        }
        errorMessage={errors?.likedBy?.errorMessage}
        setFieldValue={setCurrentLikedByValue}
        inputFieldRef={likedByRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Liked by"
          isRequired={false}
          isReadOnly={false}
          value={currentLikedByValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.likedBy?.hasError) {
              runValidationTasks("likedBy", value);
            }
            setCurrentLikedByValue(value);
          }}
          onBlur={() => runValidationTasks("likedBy", currentLikedByValue)}
          errorMessage={errors.likedBy?.errorMessage}
          hasError={errors.likedBy?.hasError}
          ref={likedByRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "likedBy")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              isbn,
              title,
              thumbnailUrl,
              author,
              genre,
              numberInSeries,
              rating,
              wordCount,
              description,
              likedBy,
              dislikedBy: values,
            };
            const result = onChange(modelFields);
            values = result?.dislikedBy ?? values;
          }
          setDislikedBy(values);
          setCurrentDislikedByValue("");
        }}
        currentFieldValue={currentDislikedByValue}
        label={"Disliked by"}
        items={dislikedBy}
        hasError={errors?.dislikedBy?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("dislikedBy", currentDislikedByValue)
        }
        errorMessage={errors?.dislikedBy?.errorMessage}
        setFieldValue={setCurrentDislikedByValue}
        inputFieldRef={dislikedByRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Disliked by"
          isRequired={true}
          isReadOnly={false}
          value={currentDislikedByValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.dislikedBy?.hasError) {
              runValidationTasks("dislikedBy", value);
            }
            setCurrentDislikedByValue(value);
          }}
          onBlur={() =>
            runValidationTasks("dislikedBy", currentDislikedByValue)
          }
          errorMessage={errors.dislikedBy?.errorMessage}
          hasError={errors.dislikedBy?.hasError}
          ref={dislikedByRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "dislikedBy")}
        ></TextField>
      </ArrayField>
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
          isDisabled={!(idProp || suggestionBooksModelProp)}
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
              !(idProp || suggestionBooksModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
