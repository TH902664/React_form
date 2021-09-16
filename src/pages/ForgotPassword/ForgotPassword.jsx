import TextField from "src/components/TextField/TextField";

const ForgotPassword = () => {
  return (
    <>
      <TextField
        label="Email address"
        placeholder="Please Enter User Name or Email"
        type="email"
      />
      <TextField
        label="Email address"
        placeholder="Please Enter User Name or Email"
        type="password"
      />
    </>
  );
};

export default ForgotPassword;
