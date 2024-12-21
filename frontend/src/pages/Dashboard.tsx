import { Layout, Menu, Typography, Card, Row, Col, Button, Statistic } from 'antd'
import { DashboardOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import { useAuthStore } from '@/store/authStore'

const { Header, Sider, Content } = Layout
const { Title } = Typography

const Dashboard = () => {
    const user = useAuthStore((state) => state.user)
    const logout = useAuthStore((state) => state.logout)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider theme="light" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                <div style={{ height: 32, margin: 16, background: 'rgba(0,0,0,0.2)' }} />
                <Menu
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
                <Button
                    type="text"
                    icon={<LogoutOutlined />}
                    onClick={logout}
                    style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                        color: '#ff4d4f',
                    }}
                >
                    Logout
                </Button>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: '0 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <Title level={4} style={{ margin: '16px 0' }}>
                        Welcome back, {user?.username}!
                    </Title>
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Card>
                                <Statistic title="Active Projects" value={8} prefix={<DashboardOutlined />} />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <Statistic title="Tasks Completed" value={24} suffix="/ 50" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <Statistic title="Team Members" value={12} prefix={<UserOutlined />} />
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 16 }}>
                        <Col span={24}>
                            <Card title="Recent Activity">
                                <p>No recent activity to display.</p>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboard
