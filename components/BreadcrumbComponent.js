import { Breadcrumb, Layout } from 'antd';
import Link from 'next/link';

const BreadcrumbComponent = ({ title }) => {
  return (
    <>
      <Layout className='breadcrumb'>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href='/'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </Layout>
    </>
  );
};

export default BreadcrumbComponent;
