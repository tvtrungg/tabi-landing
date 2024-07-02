"use client";
import { Form, Input, InputNumber, notification } from "antd";
import { useTranslations } from "next-intl";
import { IoIosSend } from "react-icons/io";
import { useForm } from "@formspree/react";
import { useEffect } from "react";
import { values } from "lodash";

const CustomForm = () => {
  const t = useTranslations("container");

  const [form] = Form.useForm();
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID || ""
  );

  useEffect(() => {
    if (state.succeeded) {
      notification.open({
        message: t("contactPage.form.success"),
        description: t("contactPage.form.success_2"),
        type: "success",
      });
      form.resetFields();
    }
  }, [state.succeeded, form, t]);

  return (
    <div className="contact-form h-full bg-[#ff2c2c17] p-6 pl-8 overflow-y-auto">
      <h1 className="mb-10 text-xl xs:text-2xl 2xs:text-3xl md:text-4xl uppercase">
        {t("contactPage.title")}
      </h1>
      <Form
        className="flex-col md:flex-row"
        name="contact-form"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        form={form}
      >
        <div className="flex flex-col justify-between items-start lg:flex-row lg:items-center">
          <Form.Item
            className="w-full basis-[48%]"
            label={t("contactPage.form.name.label")}
            name="name"
            rules={[
              { required: true, message: t("contactPage.form.name.required") },
            ]}
          >
            <Input
              className="input-form bg-transparent border-none"
              placeholder={t("contactPage.form.name.placeholder")}
            />
          </Form.Item>

          <Form.Item
            className="w-full basis-[48%]"
            label={t("contactPage.form.phone.label")}
            name="phone"
            rules={[
              { required: true, message: t("contactPage.form.phone.required") },
            ]}
          >
            <Input
              type="number"
              className="input-form bg-transparent border-none"
              placeholder={t("contactPage.form.phone.placeholder")}
            />
          </Form.Item>
        </div>

        <Form.Item
          label={t("contactPage.form.email.label")}
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: t("contactPage.form.email.required"),
            },
          ]}
        >
          <Input
            className="input-form bg-transparent border-none"
            placeholder={t("contactPage.form.email.placeholder")}
          />
        </Form.Item>

        <Form.Item
          label={t("contactPage.form.message.label")}
          name="message"
          rules={[
            { required: true, message: t("contactPage.form.message.required") },
          ]}
        >
          <Input.TextArea
            className="input-form bg-transparent border-none"
            rows={1}
            placeholder={t("contactPage.form.message.placeholder")}
          />
        </Form.Item>

        <Form.Item className="lg:mt-2 lg:float-right">
          <button
            type="submit"
            disabled={state.submitting}
            className="submit-btn xs:text-sm 2xs:text-base md:text-xl mx-auto"
          >
            <div className="svg-wrapper">
              <IoIosSend className="send-icon" />
            </div>
            <span>
              {" "}
              {state.submitting
                ? t("contactPage.form.sending")
                : t("contactPage.form.send")}
            </span>
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomForm;
