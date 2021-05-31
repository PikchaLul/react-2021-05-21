import Rate from '../../rate';
import PropTypes from 'prop-types';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="name">
          {user}
        </h4>
        <p className={styles.comment} data-id="text">
          {text}
        </p>
      </div>
      <div className={styles.rate} data-id="rate">
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.defaultProps = {
  user: 'Anonymous',
  text: '',
};

Review.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

export default Review;
