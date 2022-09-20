import React from 'react';
import styled from 'styled-components';
import { Button, Form as AntForm, Select, Input as AntInput } from 'antd';

const { Option } = Select;


const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  margin: 0;


  @media screen and (max-width: 778px) {
    padding: 10px 20px
  }
`;

const StyledForm = styled(AntForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
  @media screen and (max-width: 778px) {
    padding: 5px 10px
  }
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0 15px 0;
`;

const StyledSelect = styled(Select)`
  width: 50%

`;
const StyledOption = styled(Option);

const StyledInput = styled(AntInput);


const Form = () => {
  const [form] = AntForm.useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  const layout = { labelCol: { span: 10 }, wrapperCol: { span: 10 } };

  return (<Main>
    <StyledForm form={form} submit={onSubmit}>
      <AntForm.Item
        {...layout}
        name="category"
        rules={[{
          required: true, message: 'This is required',
        }]}
      >
        <Label>
          Выберите категорию
        </Label>
        <StyledSelect
          // value={}
          showArrow={true}
          style={{ display: 'block !important' }}>>
          <StyledOption value="1">Разработка и IT</StyledOption>
          <StyledOption value="2">Дизайн</StyledOption>
          <StyledOption value="3">SEO и трафик</StyledOption>
          <StyledOption value="4">Соцсети и реклама</StyledOption>
          <StyledOption value="5">Тексты и переводы</StyledOption>
          <StyledOption value="6">Аудио, видео, съемка</StyledOption>
        </StyledSelect>
      </AntForm.Item>
      <AntForm.Item
        {...layout}
        name="projectName"
        rules={[{
          required: true, message: 'This is required',
        }, {
          max: 230, message: 'Value should be less than 230 character',
        }, {
          min: 10, message: 'Value should not be less than 10 character',
        }]}
      >
        <Label>
          Введите название проекта
        </Label>
        <AntInput />
      </AntForm.Item>


      <AntForm.Item
        {...layout}
        name="description"
        rules={[{
          required: true, message: 'This is required',
        }, {
          max: 100, message: 'Value should be less than 230 character',
        }, {
          min: 2000, message: 'Value should not be less than 10 character',
        }]}
      >
        <Label>
          Введите описание проекта
        </Label>
        <AntInput.TextArea />
      </AntForm.Item>


      <AntForm.Item
        {...layout}
        name="sumMin"
        rules={[{
          required: true, message: 'This is required',
        }]}
      >
        <Label>

        </Label>
      </AntForm.Item>
      <AntForm.Item
        {...layout}
        name="sumMax"
        rules={[{
          required: true, message: 'This is required',
        }]}
      >
        <Label>

        </Label>
      </AntForm.Item>
      <AntForm.Item
        {...layout}
        name="category"
        rules={[{
          required: true, message: 'This is required',
        }]}
      >
        <Label>

        </Label>
      </AntForm.Item>
      <AntForm.Item
        {...layout}
        name="category"
        rules={[{
          required: true, message: 'This is required',
        }]}
      >
        <Label>

        </Label>
      </AntForm.Item>
      <AntForm.Item
        {...layout}
        name="category"
        rules={[{
          required: true, message: 'This is required',
        }]}
      >
        <Label>

        </Label>
      </AntForm.Item>
      <AntForm.Item
        {...layout}
        name="category"
        rules={[{
          required: true, message: 'This is required',
        }]}
      >
        <Label>

        </Label>
      </AntForm.Item>
      <AntForm.Item
        {...layout}
        name="category"
        rules={[{
          required: true, message: 'This is required',
        }]}
      >
        <Label>

        </Label>
      </AntForm.Item>
      {/*<Button onClick={() => onSubmit} type="primary">Primary Button</Button>*/}
      <button type="submit">Primary Button</button>
    </StyledForm>
  </Main>);
};

export default Form;