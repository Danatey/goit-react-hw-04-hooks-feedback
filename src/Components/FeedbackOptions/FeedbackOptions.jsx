import ProrTypes from 'prop-types'

import './FeedbackOptions.scss'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="FeedbackOptions">
    {options.map(({ btnName, id }) => {
      return (
        <button
          key={id}
          type="button"
          onClick={onLeaveFeedback}
        >{btnName}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.prorTypes = {
  onLeaveFeedback: ProrTypes.func,
  id: ProrTypes.string,
  options: ProrTypes.node,
}

export default FeedbackOptions