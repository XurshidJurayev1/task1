import React from 'react';
import styled from 'styled-components';
import { Button, Form as AntForm, Select, Input as AntInput, InputNumber } from 'antd';

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
  margin: 10px 0 10px 0;
`;

const StyledSelect = styled(Select)`
  width: 50%

`;
const StyledOption = styled(Option);

const StyledNumber = styled(InputNumber)`
  width: 200px;
`;


const BoxFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;


  @media screen and (max-width: 778px) {
    width: 100%;
    flex-direction: column;
    justify-content: left;
  }
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0 25px 0;
`;


const Form = () => {
  const [form] = AntForm.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
  };

  const layout = { labelCol: { span: 10 }, wrapperCol: { span: 10 } };

  return (<Main>
    <StyledForm form={form}>
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

      <Label>
        Введите стоимость проекта от и до
      </Label>
      <BoxFlex>

        <AntForm.Item
          name="sumMin"
          rules={[{
            required: true, message: 'This is required',
          }, {
            min: 10000, message: 'Value should not be less than 10 000 sum',
          }]}
        >
          <StyledNumber />
        </AntForm.Item>

        <AntForm.Item

          name="sumMax"
          rules={[{
            required: true, message: 'This is required',
          }, {
            max: 12000000, message: 'Value should be less than 230 character',
          }]}
        >
          <StyledNumber />
        </AntForm.Item>
      </BoxFlex>
      <>
        <SubTitle>
          Предложение фрилансера
        </SubTitle>


        <AntForm.Item
          {...layout}
          name="offer1"
          rules={[{
            required: true, message: 'This is required',
          }, {
            max: 50, message: 'Value should be less than 230 character',
          }, {
            min: 2000, message: 'Value should not be less than 10 character',
          }]}
        >
          <Label>
            ВВЕДИТЕ СВОЕ ПРЕДЛОЖЕНИЕ
          </Label>
          <AntInput.TextArea />
        </AntForm.Item>

        <AntForm.Item
          {...layout}
          name="offerSum1"
          rules={[{
            required: true, message: 'This is required',
          }, {
            max: 10000, message: 'Value should be less than 230 character',
          }, {
            min: 12000000, message: 'Value should not be less than 10 character',
          }]}
        >
          <Label>
            ВВЕДИТЕ СУММУ ЗА КОТОРУЮ ВОЗЬМЕТЕСЬ ЗА ПРОЕКТ
          </Label>
          <StyledNumber />
        </AntForm.Item>
      </>

      <>
        <SubTitle>
          Предложение фрилансера
        </SubTitle>
        <AntForm.Item
          {...layout}
          name="offer2"
          rules={[{
            required: true, message: 'This is required',
          }, {
            max: 50, message: 'Value should be less than 230 character',
          }, {
            min: 2000, message: 'Value should not be less than 10 character',
          }]}
        >
          <Label>
            ВВЕДИТЕ СВОЕ ПРЕДЛОЖЕНИЕ
          </Label>
          <AntInput.TextArea />
        </AntForm.Item>

        <AntForm.Item
          {...layout}
          name="offerSum2"
          rules={[{
            required: true, message: 'This is required',
          }, {
            max: 10000, message: 'Value should be less than 230 character',
          }, {
            min: 12000000, message: 'Value should not be less than 10 character',
          }]}
        >
          <Label>
            ВВЕДИТЕ СУММУ ЗА КОТОРУЮ ВОЗЬМЕТЕСЬ ЗА ПРОЕКТ
          </Label>
          <StyledNumber />
        </AntForm.Item>
      </>

      <>
        <SubTitle>
          Предложение фрилансера
        </SubTitle>
        <AntForm.Item
          {...layout}
          name="offer3"
          rules={[{
            required: true, message: 'This is required',
          }, {
            max: 50, message: 'Value should be less than 230 character',
          }, {
            min: 2000, message: 'Value should not be less than 10 character',
          }]}
        >
          <Label>
            ВВЕДИТЕ СВОЕ ПРЕДЛОЖЕНИЕ
          </Label>
          <AntInput.TextArea />
        </AntForm.Item>

        <AntForm.Item
          {...layout}
          name="offerSum4"
          rules={[{
            required: true, message: 'This is required',
          }, {
            max: 10000, message: 'Value should be less than 230 character',
          }, {
            min: 12000000, message: 'Value should not be less than 10 character',
          }]}
        >
          <Label>
            ВВЕДИТЕ СУММУ ЗА КОТОРУЮ ВОЗЬМЕТЕСЬ ЗА ПРОЕКТ
          </Label>
          <StyledNumber />
        </AntForm.Item>
      </>

      {/*<Button onClick={() => onSubmit} type="primary">Primary Button</Button>*/}
      <button type="button" onClick={onSubmit}>Primary Button</button>
    </StyledForm>
  </Main>);
};

export default Form;