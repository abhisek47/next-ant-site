import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DatabaseOutlined,
  AppstoreAddOutlined,
  CompassOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { SubMenu } = Menu;

const MenuComponent = () => {
  return (
    <div className='app-drawer'>
      <Menu mode='inline' style={{ width: '100%' }}>
        <SubMenu
          key='sub1'
          title={
            <span>
              <MailOutlined />
              <span>Company</span>
            </span>
          }>
          <Menu.Item key='1'>
            <Link href='/private-company'>Private limited company</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link href='/limited-liability-partnership'>
              Limited liability partnership
            </Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link href='/public-company'>Public limited company</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub2'
          icon={<AppstoreOutlined />}
          title='Intellectual property'>
          <Menu.Item key='4'>
            <Link href='/trademark'>Trademark registration</Link>
          </Menu.Item>
          <Menu.Item key='5'>
            <Link href='/trademark-renewal'>Trademark renewal</Link>
          </Menu.Item>
          <Menu.Item key='6'>Copyright registration</Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub3'
          title='Goods and services tax'
          icon={<PieChartOutlined />}>
          <Menu.Item key='7'>
            <Link href='/gst'>GST registration</Link>
          </Menu.Item>
          <Menu.Item key='8'>
            <Link href='/gst-return'>GST return filing</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' icon={<SettingOutlined />} title='Income tax'>
          <Menu.Item key='9'>
            <Link href='/income-tax-return-1'>Income tax return - 1</Link>
          </Menu.Item>
          <Menu.Item key='10'>
            <Link href='/income-tax-return-2'>Income tax return - 2</Link>
          </Menu.Item>
          <Menu.Item key='11'>
            <Link href='/income-tax-return-3'>Income tax return - 3</Link>
          </Menu.Item>
          <Menu.Item key='12'>
            <Link href='/income-tax-return-4'>Income tax return - 4</Link>
          </Menu.Item>
          <Menu.Item key='13'>
            <Link href='/income-tax-return-5'>Income tax return - 5</Link>
          </Menu.Item>
          <Menu.Item key='14'>
            <Link href='/income-tax-return-6'>Income tax return - 6</Link>
          </Menu.Item>
          <Menu.Item key='15'>
            <Link href='/income-tax-return-7'>Income tax return - 7</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub5'
          icon={<DatabaseOutlined />}
          title='Annual compliances'>
          <Menu.Item key='16'>
            <Link href='/private-company-compliances'>
              Private limited company
            </Link>
          </Menu.Item>
          <Menu.Item key='17'>
            <Link href='/limited-partnership-compliances'>
              LLP annual partnership
            </Link>
          </Menu.Item>
          <Menu.Item key='18'>
            <Link href='/other-compliances'>
              Partnership firm, society, trust, ngo
            </Link>
          </Menu.Item>
          <Menu.Item key='19'>
            <Link href='/import-export-code'>Import export code</Link>
          </Menu.Item>
          <Menu.Item key='20'>
            <Link href='/iso'>ISO registration</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub6' icon={<CompassOutlined />} title='Payroll'>
          <Menu.Item key='21'>
            <Link href='/provident-fund'>PF registration</Link>
          </Menu.Item>
          <Menu.Item key='22'>
            <Link href='/provident-fund-return'>PF return filing</Link>
          </Menu.Item>
          <Menu.Item key='23'>
            <Link href='/employees-state-insurance'>ESI registration</Link>
          </Menu.Item>
          <Menu.Item key='24'>
            <Link href='/employees-state-insurance-return'>
              ESI return filing
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub7' icon={<AppstoreAddOutlined />} title='Others'>
          <Menu.Item key='25'>
            <Link href='/tax-deduction-at-source'>TDS filing</Link>
          </Menu.Item>
          <Menu.Item key='26'>
            <Link href='/tax-collected-at-source'>TCS filing</Link>
          </Menu.Item>
          <Menu.Item key='27'>
            <Link href='/book-keeping'>Book keeping</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MenuComponent;
