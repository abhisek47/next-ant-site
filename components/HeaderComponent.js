import { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import DrawerComponent from './DrawerComponent';
import Link from 'next/link';

const { SubMenu } = Menu;

const HeaderComponent = () => {
  // state = {
  //   current: 'mail',
  // };

  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  const { Header } = Layout;
  // const { current } = this.state;
  return (
    <>
      <Layout>
        <Header>
          <div className='container'>
            <div className='logo'>
              <Link href='/'>ClientFilingIndia</Link>
            </div>
            <div className='navbar'>
              <Menu onClick={handleClick} mode='horizontal'>
                <SubMenu title='Company'>
                  <Menu.Item key='setting:1'>
                    <Link href='/private-company'>Private limited company</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:2'>
                    <Link href='/limited-liability-partnership'>
                      Limited liability partnership
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:3'>
                    <Link href='/public-company'>Public limited company</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu title='Intellectual property'>
                  <Menu.Item key='setting:4'>
                    <Link href='/trademark'>Trademark registration</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:5'>
                    <Link href='/trademark-renewal'>Trademark renewal</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:6'>Copyright registration</Menu.Item>
                </SubMenu>
                <SubMenu title='GST'>
                  <Menu.Item key='setting:7'>
                    <Link href='/gst'>GST registration</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:8'>
                    <Link href='/gst-return'>GST return filing</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu title='Income tax'>
                  <Menu.Item key='setting:9'>
                    <Link href='/income-tax-return-1'>
                      Income tax return - 1
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:10'>
                    <Link href='/income-tax-return-2'>
                      Income tax return - 2
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:11'>
                    <Link href='/income-tax-return-3'>
                      Income tax return - 3
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:12'>
                    <Link href='/income-tax-return-4'>
                      Income tax return - 4
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:13'>
                    <Link href='/income-tax-return-5'>
                      Income tax return - 5
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:14'>
                    <Link href='/income-tax-return-6'>
                      Income tax return - 6
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:15'>
                    <Link href='/income-tax-return-7'>
                      Income tax return - 7
                    </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu title='Annual compliances'>
                  <Menu.Item key='setting:16'>
                    <Link href='/private-company-compliances'>
                      Private limited company
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:17'>
                    <Link href='/limited-partnership-compliances'>
                      LLP annual partnership
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:18'>
                    <Link href='/other-compliances'>
                      Partnership firm, society, trust, ngo
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:19'>
                    <Link href='/import-export-code'>Import export code</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:20'>
                    <Link href='/iso'>ISO registration</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu title='Payroll'>
                  <Menu.Item key='setting:21'>
                    <Link href='/provident-fund'>PF registration</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:22'>PF return filing</Menu.Item>
                  <Menu.Item key='setting:23'>
                    <Link href='/employees-state-insurance'>
                      ESI registration
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='setting:24'>
                    <Link href='/employees-state-insurance-return'>
                      ESI return filing
                    </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu title='Others'>
                  <Menu.Item key='setting:25'>
                    <Link href='/tax-deduction-at-source'>TDS filing</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:26'>
                    <Link href='/tax-collected-at-source'>TCS filing</Link>
                  </Menu.Item>
                  <Menu.Item key='setting:27'>
                    <Link href='/book-keeping'>Book keeping</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <div className='action'>
              <Link href='tel:+91-983-294-9193'>
                <Button
                  type='primary'
                  icon={<PhoneOutlined rotate={90} />}
                  className='call'>
                  +91-983-294-9193
                </Button>
              </Link>
            </div>
            <div className='collapse-menu'>
              <DrawerComponent />
            </div>
          </div>
        </Header>
      </Layout>
    </>
  );
};

export default HeaderComponent;
