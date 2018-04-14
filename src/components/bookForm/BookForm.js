import React, { Component } from 'react';
import { connect } from 'react-redux';
import Field from '../field';
import Button from '../button';

// import './Field.css';

class BookForm extends Component {


  render() {
    const {
        errors,
        books,
        title,
        author,
        description,
        isbn10,
        isbn13,
        category,
        published,
        pagecount,
        language,
      submit,
    change,
  isFetching } = this.props;

        const { result: { items } } = books;


        return (
          <div>
            <h2>
              Bæta við bók
            </h2>

            <form onSubmit={submit}>
              <Field
                name="title"
                value={title}
                type="text"
                label="Title"
                onChange={change}
              />
              <Field
                name="author"
                value={author}
                type="text"
                label="Author"
                onChange={change}
              />
              <div>
                <textarea name="description" value={description} onChange={change}></textarea>
              </div>
              Flokkur:
              <select name="category" onChange={change}>
                {items.map((item) => (
                  <option key={item.id} value={item.id}  >{item.title}</option>
                ))}
              </select>


              <Field
                name="isbn10"
                value={isbn10}
                type="text"
                label="ISBN10"
                onChange={change}
              />
              <Field
                name="isbn13"
                value={isbn13}
                type="text"
                label="ISBN13"
                onChange={change}
              />
              <Field
                name="published"
                value={published}
                type="text"
                label="Útgefin"
                onChange={change}
              />
              <Field
                name="pagecount"
                value={pagecount}
                type="number"
                label="fjoldi sida"
                onChange={change}
              />
              <Field
                name="language"
                value={language}
                type="text"
                label="tungumal"
                onChange={change}
              />
              <Button disabled={isFetching}>bua til bok</Button>
            </form>

          </div>
        );
      }
}

export default BookForm;