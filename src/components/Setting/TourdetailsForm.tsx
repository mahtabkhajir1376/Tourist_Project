"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { TiDelete } from "react-icons/ti";

interface FormState {
  [key: string]: string;
  editingField: string | null;
}

const initialState: FormState = {
  address: "",
  phone: "",
  email: "",
  instagram: "",
  twitter: "",
  youtube: "",
  linkedin: "",
  editingField: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFieldValue: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setEditingField: (state, action: PayloadAction<string | null>) => {
      state.editingField = action.payload;
    },
    saveFieldValue: (state) => {
      state.editingField = null;
    },
  },
});

const { setFieldValue, setEditingField, saveFieldValue } = formSlice.actions;

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

const TourdetailsForm: React.FC = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  const handleEditClick = (field: string) => {
    dispatch(setEditingField(field));
  };

  const handleSaveClick = () => {
    dispatch(saveFieldValue());
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    dispatch(setFieldValue({ field, value: e.target.value }));
  };

  return (
    <form className="w-[1011px] h-[581px] p-4 space-y-4 bg-white text-sm font-iransansNumber">
      {[
        { label: "آدرس", type: "text", id: "address", maxLength: 100 },
        { label: "شماره تماس", type: "tel", id: "phone" },
        { label: "آدرس ایمیل", type: "email", id: "email" },
        { label: "لینک اینستاگرام", type: "url", id: "instagram" },
        { label: "لینک توییتر", type: "url", id: "twitter" },
        { label: "لینک یوتیوب", type: "url", id: "youtube" },
        { label: "لینک لینکدین", type: "url", id: "linkedin" },
      ].map(({ label, type, id }) => (
        <div key={id} className="flex flex-col space-y-2">
          <div className="flex items-center space-x-4">
            <img
              src="/image/LoginForm/Edit.png"
              alt=""
              className="ml-2 cursor-pointer"
              onClick={() => handleEditClick(id)}
            />
            <label htmlFor={id} className="w-[150px] text-right">
              {label}:
            </label>
            <input
              type={type}
              id={id}
              className="input input-bordered input-success w-full h-[42px] rounded-md"
              value={form[id]}
              onChange={(e) => handleChange(e, id)}
              readOnly={form.editingField !== id && form.editingField !== null}
            />
            {form.editingField === id && (
              <button
                type="button"
                className="ml-2 bg-[#01A657] w-[60px] h-[30px] text-white rounded"
                onClick={handleSaveClick}
              >
                ثبت
              </button>
            )}
          </div>

          {id === "address" && (
            <p className="text-[#707070] text-[10px] text-right font-light mr-44">
              تعداد کاراکترها بیش از 100 کاراکتر نشود
            </p>
          )}
        </div>
      ))}

      <div className="flex items-center space-x-4 mt-4">
        <img src="/image/LoginForm/Edit.png" alt="" className="ml-2" />
        <label className="w-[150px] text-right">تعویض لوگو:</label>
        <div className="relative w-[150px] h-[100px] bg-white shadow-lg shadow-[#E3EBE9] border border-[#01A657] border-dashed rounded-md flex justify-center items-center">
          <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full">
            <input type="file" className="hidden" />
            <img
              src="/image/DetailsTour/TourdetailsCard/Upload.svg"
              alt="Upload"
              className="w-5 h-5"
            />
          </label>

          <TiDelete className="absolute top-[-12px] right-[-12px] w-5 h-5 text-red-500 cursor-pointer" />
        </div>
      </div>
    </form>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <TourdetailsForm />
  </Provider>
);

export default App;
