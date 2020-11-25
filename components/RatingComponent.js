import { Rate } from 'antd';

const RatingComponent = () => {
  return (
    <>
      <div className='rating'>
        <Rate disabled defaultValue={4} />
      </div>
    </>
  );
};

export default RatingComponent;
