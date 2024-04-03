"use client";

import React, { ChangeEvent, useState } from "react";
import {
  Button,
  FileInput,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";
import axios from "axios";
interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const initialValues: any = {
  title: "",
  description: "",
  price: 0,
  images: [],
  categoryId: 0,
};
function CustomModal({ openModal, setOpenModal }: Props) {
  const [loading, setLoading] = useState(false);
  const [formDataState, setFormDataState] = useState(initialValues);
  const formData = [
    { title: "title", type: "text", placeholder: "enter your title" },
    {
      title: "description",
      type: "textarea",
      placeholder: "enter your description",
    },
    { title: "price", type: "number", placeholder: "enter your price" },
    {
      title: "categoryId",
      type: "number",
      placeholder: "enter your categoryId",
    },

    { title: "images", type: "file" },
  ];
  const createProduct = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        `${process.env.BASEURL}products`,
        formDataState,
      );
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create product</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 overflow-auto">
            {formData.map(({ type, title, placeholder }) => {
              return (
                <>
                  {type == "file" ? (
                    <div id="fileUpload" className="max-w-md">
                      <div className="mb-2 block">
                        <Label htmlFor="file" value="upload images" />
                      </div>
                      <FileInput
                        id="file"
                        accept="image/*"
                        multiple
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setFormDataState({
                            ...formDataState,
                            images: e.target.files,
                          })
                        }
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <Label htmlFor="title" className="capitalize">
                        {title}:
                      </Label>
                      {type == "textarea" ? (
                        <Textarea
                          id="comment"
                          placeholder="Leave a comment..."
                          required
                          rows={4}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            setFormDataState({
                              ...formDataState,
                              description: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <TextInput
                          id="input-gray"
                          name={title}
                          type={type}
                          placeholder={placeholder}
                          required
                          color="gray"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setFormDataState({
                              ...formDataState,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => createProduct()} isProcessing={loading}>
            {" "}
            create
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
