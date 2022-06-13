var Search = () => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { entry: "" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   // Controlled components, a two-way connection between state and an input
//   handleChange(event) {
//     // this.state.entry = event.target.value // Bad, direct manipulation
//     this.setState({
//       entry: event.target.value,
//     });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.handleFormSubmission(this.state.entry);
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="Do something..."
//           value={this.state.entry}
//           onChange={this.handleChange}
//         />
//         <button type="submit">Add Task</button>
//       </form>
//     );
//   }
// }