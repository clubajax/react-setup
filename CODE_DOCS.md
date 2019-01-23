# Code Documentation

Documents code practices and patterns used in Architect

## Form

The `/app/components/Form` is used to manage the state of fields.

The Form collects all values and passes them up to the parent via both `onChange` (fired on every keystroke) and `onSubmit` (fired on form submit) events.
There is also a reset functionality which can be achieved by either passing in a button of `type="reset"`, or, in a Custom Field (see below) the
`onReset` event is provided in the props. Reseting the Form can also simply be reset by reseting the value data.

The Form data is provided in a prop of the Form - values should not be provided to the Field.

A minimal Form example

```jsx harmony
<Form
    onChange={formChange}
    onSubmit={formSubmit}
    requiredFields={['description', 'amount']}
    value={{ description: 'Describe something', amount: '9.99' }}>
    <Field
        label="Item Purchased (Required)"
        type="text"
        name="description"
        required
    />
    <Field
        label="Amount (Required)"
        type="currency"
        name="amount"
        required
        min={8.0}
        max={10.0}
        onChange={fieldChange}
    />
    <Field
        type="textarea"
        name="notes"
        label="Notes (Optional)"
    />
    <div className="buttons">
        <Button type="reset">Reset</Button>
        <Button type="submit">Continue</Button>
    </div>
</Form>
```

The Form children are parsed recursively, so the structure does not need to be flat.

The primary child of Form is`/app/components/Field`.

### Form Field

Form Fields are _controlled_ components. They should not manage their own state.

A minimal Field example:

```jsx harmony
<Field
    type="text"
    name="my-field"
/>
```
The `type` prop is required and determines what type of form control is rendered. The types currently available are:

 * text
 * textarea
 * currency
 * dropdown

The `name` prop is required, because this is used as the key when the value is passed up to form. The value in the field
is passed as a key/value object which is then mixed into the Form value object.

Field provides the following validations (so far):

 * required
 * min
 * max

Field autoformats the display on blur for:

 * currency
 (others coming as needed)

Field provides error management. If a field is in error, a node with the validation message will be rendered below.
The parent node of the field will have an `error` className applied for styling.

### Form Custom Fields

Components can be coded to work with `Form` by utilizing the `components/hoc/Field` higher order component with the following signature:
```jsx harmony
export default HigherOrderComponent([...list of property value keys], CustomFieldClass);
```
For example:
```jsx harmony
export default Field(['to', 'from'], AccountsDropdowns);
```

The CustomField will be provided with a `this.props.onChange` method to handle field changes.

It is expected that passing a property value of `''` (an empty string) will reset the Field.

See: `/app/views/transfers/components/AccountsDropdowns` for an example.
