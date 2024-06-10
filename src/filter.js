import { connect } from "react-redux";

const Filter = ({ count, onFilter }) => (
  <input
    placeholder={`Filter ${count} items`}
    onInput={(e) => {
      onFilter(e.target.value.toLowerCase());
    }}
  />
);

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  onFilter: (filter) => dispatch({ type: "FILTER_CHANGED", filter }),
  //   onDelete: (id) => dispatch({ type: "LANGUAGE_REMOVED", id }),
});

export const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
