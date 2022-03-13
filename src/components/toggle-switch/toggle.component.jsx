import './toggle.scss';

const Toggle = ({ Name, onChange }) => {
  return (
    <div className='toggle-switch'>
      <input
        type='checkbox'
        className='toggle-switch-checkbox'
        name={Name}
        id={Name}
        onChange={(e) => {
          onChange(e.target.checked);
          console.log(e.target.checked);
        }}
      />
      <label className='toggle-switch-label' htmlFor={Name}>
        <span className='toggle-switch-inner' />
        <span className='toggle-switch-switch' />
      </label>
    </div>
  );
};

export default Toggle;
