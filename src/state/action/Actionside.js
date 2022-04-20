import axios from "axios";
import { ActionTypes } from "./Actiontype";

export const fetchsidedish = () => {
  return async (dispatch) => {
    let response;
    try {
      response = await axios.get("http://localhost:3007/sidedish");
    } catch (err) {
      console.log(err);
    } finally {
      if (response.data) {
        console.log(response, "res");
        dispatch({ type: ActionTypes.FETCH_SIDEDISH, payload: response.data });
      } else {
        console.log("inally error occured", response);
      }
    }
  };
};

export const addsidedish = (postsidedish) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:3007/sidedish", postsidedish)
      .then((res) => {
        console.log(res, "putf");
        dispatch({
          type: ActionTypes.POST_SIDEDISH,
          payload: res.postsidedish,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removesidedish = (items) => {
  return async (dispatch) => {
    await axios
      .delete(`http://localhost:3007/sidedish/${items}`)
      .then((res) => {
        console.log(res, "putf");
        dispatch({ type: ActionTypes.DELETE_SIDEDISH, payload: res.items });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editsidedish = (editside, id) => {
  console.log(editside, id);
  return async (dispatch) => {
    await axios
      .put(`http://localhost:3007/sidedish/${id}`, editside)

      .then((res) => {
        console.log(res, "putf");
        dispatch(fetchsidedish());
        console.log("edit", editside);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
