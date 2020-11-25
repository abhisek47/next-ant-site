import { Timeline, Typography } from 'antd';

const DocumentComponent = ({ documents, title }) => {
  const { Paragraph, Title } = Typography;
  return (
    <>
      <Title>{title}</Title>
      <Paragraph strong>In below all the documents is required</Paragraph>
      <Timeline>
        {documents.map((cases) => (
          <Timeline.Item key={cases.id}>
            <Paragraph level={4}>{cases.case}</Paragraph>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
};

export default DocumentComponent;
