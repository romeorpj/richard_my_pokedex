import './../home/home.css'

const Buttons = ({
	btnType,
	clickHandler,
	isDisabled }: { btnType: string, clickHandler: () => void, isDisabled: boolean }) => {

	return (
		<button
			type="button"
			disabled={ !isDisabled }
			title={ btnType }
			aria-label={ btnType }
			onClick={ clickHandler }
			className={ `paginate-btn ${!isDisabled ? 'disabled' : ''}`
			}
		>
			{ btnType }
		</button>
	)
}

export default Buttons
Buttons.displayName = 'Buttons'