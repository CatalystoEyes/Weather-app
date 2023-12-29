import { Button, TextField } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IField } from '../../Types/auth.interface'
import { users } from '../../Types/users/AuthUsers'
import { useNavigate } from 'react-router-dom'
import styles from './AuthInput.module.scss'

const AuthInput = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IField>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<IField> = (data) => {
        console.log(data)
        reset()
    }

    const logIn = (data: IField) => {
        if (data.username === users.username && data.password === users.password) {
            navigate('/home');
            reset()
        } else {
            alert("This account does not exist")
            reset()
        }
    }
    return (
        <div className={styles.auth_container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.auth_form}>
                <TextField
                    {...(register('username', { required: 'Name is require field!' }))}
                    id="standard-username-input"
                    label="Username"
                    type="text"
                    autoComplete="current-username"
                    variant="standard"
                    sx={{ display: 'block', padding: "2px 0px" }}
                />
                {errors?.username && <div style={{ color: "#F71726", margin: "4px" }}>{errors.username.message}</div>}
                <TextField
                    {...(register('password', { required: 'Password is require field!' }))}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    sx={{ display: 'block', margin: "2px 0px", marginBottom: "10px" }}
                />
                {errors?.password && <div style={{ color: "#F71726", marginBottom: "10px" }}>{errors.password.message}</div>}
                <div className={styles.buttons_container}>
                    <Button className='auth-buttons' size="small" variant="outlined" onClick={handleSubmit(logIn)} type="submit" sx={{ marginRight: "5px" }}>Sign in</Button>
                    <Button className='auth-buttons' size="small" variant="outlined" onClick={handleSubmit(logIn)} type="submit" sx={{ marginRight: "5px" }}>Sign up</Button>
                </div>
            </form>
        </div >
    )
}


export default AuthInput
