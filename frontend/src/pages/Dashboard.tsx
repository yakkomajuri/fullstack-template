import { Card, Row, Col, Statistic } from 'antd'
import { DashboardOutlined, UserOutlined } from '@ant-design/icons'
import { AppLayout } from '@/components/AppLayout/AppLayout'
import { Content } from 'antd/es/layout/layout'

const Dashboard = () => {
    return (
        <AppLayout>
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
        </AppLayout>
    )
}

export default Dashboard
