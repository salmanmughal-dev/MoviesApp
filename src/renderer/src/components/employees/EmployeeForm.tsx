import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Input, Button, DatePicker, Select, Avatar } from 'antd'
import boy from '@renderer/assets/boy.png'

const { Option } = Select

const EmployeeForm = (): JSX.Element => {
  const [form] = Form.useForm()
  const { employeeId } = useParams<{ employeeId: string }>()

  useEffect(() => {
    // Fetch employee data using employeeId and set form values if necessary
    // Example:
    // fetchEmployeeData(employeeId).then(data => form.setFieldsValue(data));
  }, [employeeId])

  const onFinish = (values): void => {
    console.log('Received values of form: ', values)
    // Handle form submission
  }

  return (
    <div className="bg-[#FF784D] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Employee Information</h2>
        <Form
          form={form}
          name="employee_form"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            name: 'Jane Smith',
            department: 'Engineering',
            hireDate: null,
            jobTitle: ''
          }}
        >
          <div className="flex items-center justify-center">
            <Avatar
              size={128}
              src={boy}
              alt="Profile"
              className="rounded-full border-4 border-white"
            />
          </div>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter employee name' }]}
          >
            <Input className="hover:border-orange-600" />
          </Form.Item>
          <Form.Item
            name="department"
            label="Department"
            rules={[{ required: true, message: 'Please select a department' }]}
          >
            <Select className="hover:!border-orange-600" placeholder="Select a department">
              <Option value="hr">Human Resources</Option>
              <Option value="it">Information Technology</Option>
              <Option value="finance">Finance</Option>
              <Option value="marketing">Marketing</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="hireDate"
            label="Hire Date"
            rules={[{ required: true, message: 'Please select hire date' }]}
          >
            <DatePicker className="w-full hover:border-orange-600" />
          </Form.Item>
          <Form.Item
            name="jobTitle"
            label="Job Title"
            rules={[{ required: true, message: 'Please enter job title' }]}
          >
            <Input className="hover:border-orange-600" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#FF784D] hover:!bg-[#d85f3a]"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default EmployeeForm
