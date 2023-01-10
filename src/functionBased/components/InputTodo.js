import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
//NOTE:COMPONENTS WITH CONST DON't HAVE STATE 
//BUT COMPONENTS WITH CLASS DO
const InputTodo = props => {
  const [title, setTitle] = useState("")

  const onChange = e => {
    setTitle(e.target.value)
  }
  //FUNCTION IN FUNCTION, not class in class
  const handleSubmit = e => {
    e.preventDefault()
    if (title.trim()) {
      props.addTodoProps(title)
      setTitle("")
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
  <FaPlusCircle
    style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
  />
</button>
    </form>
  )
}

export default InputTodo



//CODE WITH MORE THAN ONE STATE VALUE:

/*

import React, { useState } from "react"

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    fName: "",
    lastName: "",
  })

  const onChange = e => {
    setInputText(prevState => {
      ...prevState,
      //^^up copies entire properties from old state then changes part of it
      //without it all would be changed
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add first name"
          value={inputText.fName}
          name="fName"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Add last name"
          value={inputText.lastName}
          name="lastName"
          onChange={onChange}
        />

        <button className="input-submit">Submit</button>
      </form>
      <h2>{inputText.fName}</h2>
      <h2>{inputText.lastName}</h2>
    </>
  )
}

export default InputTodo

*/




//PAST CODE
/*import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
    };
    onChange = e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title)
            this.setState({
              title: "",
            })
        } else {
            alert("Please write item")
        }
    };
  render() {
    return (
        <form onSubmit={this.handleSubmit} className="form-container">
            <input
            type="text"
            className="input-text"
            placeholder="Add todo..."
            value={this.state.title}
            name="title"
            onChange={this.onChange}
            />
            <button className="input-submit">Submit</button>
        </form>
    )
  }
}
export default InputTodo*/