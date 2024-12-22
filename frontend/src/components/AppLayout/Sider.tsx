import { Layout, Menu } from 'antd'
import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'

const { Sider: AntSider } = Layout

export const Sider = () => {
    return (
        <AntSider theme="light" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)', background: 'var(--bg-layout)' }}>
            <div style={{ height: 32, margin: 16, background: 'rgba(0,0,0,0.2)' }} />
            <Menu
                style={{ background: 'linear-gradient(to top, hsl(220, 13%, 95%) 0%, hsla(220, 13%, 95%, 0) 50%)' }}
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <DashboardOutlined />,
                        label: 'Dashboard',
                    },
                    {
                        key: '2',
                        icon: <UserOutlined />,
                        label: 'Profile',
                    },
                    {
                        key: '3',
                        icon: <SettingOutlined />,
                        label: 'Settings',
                    },
                ]}
            />
        </AntSider>
    )
}
