/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Row, Col, Form, Select, Table } from 'antd';
import { HorizontalFormStyleWrap } from './style/formStyle';
import { BasicFormWrapper } from './style/wrapperStyle';
import { Cards } from '../cards/frame/cards-frame';
import { Button } from '../buttons/buttons';
import ExperimentModal from './components/experimentModal';
import ProtoTypeHeader from './components/protoTypeInfo';

const Option = { Select };

function Testing() {
    const [showModal, setShowModal] = useState(false);

    const dataSource = [
        {
            key: '1',
            exp_title: 'Mike',
            type: 32,
            status: '10 Downing Street',
            created_on: '23/08/2002',
            created_by: 'Gowtham'
        },
        {
            key: '2',
            exp_title: 'John',
            type: 42,
            status: '10 Downing Street',
            created_on: '23/08/2002',
            created_by: 'Gowtham'
        },
    ];

    const columns = [
        {
            title: 'Exp_Title',
            dataIndex: 'exp_title',
            key: 'exp_title',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Created On',
            dataIndex: 'created_on',
            key: 'created_on',
        },
        {
            title: 'Created By',
            dataIndex: 'created_by',
            key: 'created_by',
        }
    ];
    return (
        <BasicFormWrapper>
            <HorizontalFormStyleWrap className="sDash_input-form">
                <Cards headless>
                    <ProtoTypeHeader />
                </Cards>
                <Cards headless>
                    <Row align="right" gutter={25}>
                        <Col align='right' lg={24}>
                            <Button type='primary' onClick={() => setShowModal(true)}>
                                Add Experiments
                            </Button>
                        </Col>
                    </Row>
                    <ExperimentModal visible={showModal} onCancel={() => setShowModal(false)} />
                    <br />
                    <Row align="middle" gutter={25}>
                        <Col lg={24}>
                            <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
                        </Col>
                    </Row>

                </Cards>
                <Row align="middle">
                    <Col md={24} align='right'>
                        <Button size='default' type='primary' style={{ marginRight: 5 }}>
                            save
                        </Button>
                        <Button size='default' type='light'>
                            cancel
                        </Button>
                    </Col>
                </Row>
            </HorizontalFormStyleWrap>
        </BasicFormWrapper>
    );
}

export default Testing;
