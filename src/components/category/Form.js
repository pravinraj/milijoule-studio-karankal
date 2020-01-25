import React, { Component } from 'react';

const FORMLIST = [
  { placeholder: 'Name', type: 'text' },
  { placeholder: 'Phone Number', type: 'number' }
];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formList: props.formList || FORMLIST
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.formList !== nextProps.formList) {
      this.setState({
        formList: nextProps.formList
      });
    }
  }

  render() {
    return (
      <form className='form-wrapper' name={this.props.name} onSubmit={() => {}}>
        {
          // <label for="name">First Name</label>
        }
        <input
          type="text"
          id="name"
          name="firstname"
          placeholder="Name"
          required
          autoFocus
        />
        {
          // <label for="email">Last Name</label>
        }
        <input
          type="email"
          id="email"
          name="emailId"
          placeholder="Email Id"
          required
          autoComplete="off"
        />
        {
          // <label for="">Last Name</label>
        }
        <input
          type="number"
          id="phone"
          name="phone"
          pattern="[0-9]"
          placeholder="Phone Number"
          required
        />
        <input type="text" id="message" name="message" placeholder="Message" />
        {
          <input
            type="submit"
            value="Submit"
            id="contactFormSubmitButton"
            style={{ display: 'none' }}
          />
        }
      </form>
    );
  }
}

export default Form;
