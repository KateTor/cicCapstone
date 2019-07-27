import React from 'react';
// import PropTypes from 'prop-types';
import DogContainer from './DogContainer';
 

function Result(props) {
  return (
      <div className = 'container'>
      <div>
          <h2>Result</h2>
          <DogContainer />
      </div>
      <div>
          {props.quizResult}
      </div>  
      </div> 
  );
}

// Result.propTypes = {
//   quizResult: PropTypes.string.isRequired
// };

export default Result;