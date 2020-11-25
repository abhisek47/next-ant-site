import { Table, Typography } from 'antd';

const TableComponent = ({ title, para, data, columns }) => {
  const { Paragraph, Title } = Typography;
  return (
    <>
      <Title>{title}</Title>
      <Paragraph strong>{para}</Paragraph>
      <Table
        style={{ width: '100%' }}
        columns={columns}
        dataSource={data}
        bordered
        footer={() =>
          '*The list is indicative and It is subject to periodic change.'
        }
      />
    </>
  );
};

export default TableComponent;
