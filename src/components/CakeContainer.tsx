import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";
const CakeContainer = (props: any) => {
  return (
    <div className="cake container">
      <h2> No of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>But Cake</button>
    </div>
  );
};
interface cakes {
  numOfCakes: string;
}

const mapStateToProps = (state: cakes) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
