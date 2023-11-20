import { FC } from 'react';
import './modal-style.css';
import { User } from './types';
import { imgUrl } from './consts';

type ModalProps = {
  onClose: VoidFunction;
  data: User[]
}

export const Modal: FC<ModalProps> = ({ onClose, data }) => {

  const defaultContent = <div className='defaultContent'>
    <img className='image'
         src={imgUrl}
         alt='img' />
    <p className='text'>Hi there =)</p>
  </div>;

  const content = <div className='content'>
    {data && data.map(({ first_name, last_name, email, avatar }: User) => (
      <div className='card'>
        <p className='text'>{first_name}</p>
        <p className='text'>{last_name}</p>
        <p className='text'>{email}</p>
        <img className='avatar' src={avatar} alt='avatar' />
      </div>
    ))}
  </div>;

  return (
    <div className='overlay' onClick={onClose}>
      <div className='modal'>
        <div>
          {data ? content : defaultContent}
        </div>
      </div>
      <p className='tip'>Just click somewhere to close</p>
    </div>
  );
};