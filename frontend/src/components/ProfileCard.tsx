import styled from 'styled-components';
import type { ProfileCardProps } from '../types/components/ProfileCardProps';
import { formatDate } from '../utils/dateFormatter';

export const ProfileCard = ({
    data
} : ProfileCardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="tools">
          <div className="circle">
            <span className="red box" />
          </div>
          <div className="circle">
            <span className="yellow box" />
          </div>
          <div className="circle">
            <span className="green box" />
          </div>
        </div>
        <div className="card__content">
          <p className="title">Seems like you authorized and your data stored here :)</p>
          <hr />
          <p className="title">
            Name: {data.name}
          </p>
          <p className='title'>
            Email: {data.email}
          </p>
          <p className='content'>
            created at: {formatDate(data.createdAt)}
          </p>
          <p className='content'>
            updated at: {formatDate(data.updatedAt)}
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 300px;
    margin: 0 auto;
    background-color: #f4f4f3;
    border-radius: 8px;
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .card::after {
    position: absolute;
    content: '';
    background-color: #454a50;
    width: 50px;
    height: 100px;
    z-index: -1;
    border-radius: 8px;
  }

  .tools {
    display: flex;
    align-items: center;
    padding: 9px;
    border-radius: 8px;
    background: #454a50;
    margin-top: -2px;
  }

  .circle {
    padding: 0 4px;
  }

  .card__content {
    height: 100%;
    margin: 0px;
    border-radius: 8px;
    background: #f4f4f3;
    padding: 10px;
  }

  .title {
    font-size: 20px;
  }

  .content {
    margin-top: 10px;
    font-size: 14px;
  }

  .box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
  }

  .red {
    background-color: #ff605c;
  }

  .yellow {
    background-color: #ffbd44;
  }

  .green {
    background-color: #00ca4e;
  }`;
