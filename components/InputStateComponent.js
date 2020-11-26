import { Form, Select } from 'antd';

const InputStateComponent = ({ onStateChange }) => {
  const { Option } = Select;
  return (
    <div>
      <Form.Item
        name='state'
        label='State'
        rules={[
          {
            required: true,
            message: 'Please input your state!',
          },
        ]}>
        <Select
          placeholder='Enter yout state'
          allowClear
          size='large'
          style={{ fontSize: 'inherit' }}
          onChange={onStateChange}>
          <Option value='Andaman and Nicobar Islands'>
            Andaman and Nicobar Islands
          </Option>
          <Option value='Andhra Pradesh'>Andhra Pradesh</Option>
          <Option value='Arunachal Pradesh'>Arunachal Pradesh</Option>
          <Option value='Assam'>Assam</Option>
          <Option value='Bihar'>Bihar</Option>
          <Option value='Chandigarh'>Chandigarh</Option>
          <Option value='Chhattisgarh'>Chhattisgarh</Option>
          <Option value='Dadra and Nagar Haveli and Daman and Diu'>
            Dadra and Nagar Haveli and Daman and Diu
          </Option>
          <Option value='Delhi'>Delhi</Option>
          <Option value='Goa'>Goa</Option>
          <Option value='Gujarat'>Gujarat</Option>
          <Option value='Haryana'>Haryana</Option>
          <Option value='Himachal Pradesh'>Himachal Pradesh</Option>
          <Option value='Jammu and Kashmir union territory'>
            Jammu and Kashmir union territory
          </Option>
          <Option value='Jharkhand'>Jharkhand</Option>
          <Option value='Karnataka'>Karnataka</Option>
          <Option value='Kerala'>Kerala</Option>
          <Option value='Ladakh'>Ladakh</Option>
          <Option value='Lakshadweep'>Lakshadweep</Option>
          <Option value='Madhya Pradesh'>Madhya Pradesh</Option>
          <Option value='Maharashtra'>Maharashtra</Option>
          <Option value='Manipur'>Manipur</Option>
          <Option value='Meghalaya'>Meghalaya</Option>
          <Option value='Mizoram'>Mizoram</Option>
          <Option value='Nagaland'>Nagaland</Option>
          <Option value='Odisha'>Odisha</Option>
          <Option value='Puducherry'>Puducherry</Option>
          <Option value='Punjab'>Punjab</Option>
          <Option value='Rajasthan'>Rajasthan</Option>
          <Option value='Sikkim'>Sikkim</Option>
          <Option value='Tamil Nadu'>Tamil Nadu</Option>
          <Option value='Telangana'>Telangana</Option>
          <Option value='Tripura'>Tripura</Option>
          <Option value='Uttar Pradesh'>Uttar Pradesh</Option>
          <Option value='Uttarakhand'>Uttarakhand</Option>
          <Option value='West Bengal'>West Bengal</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default InputStateComponent;
