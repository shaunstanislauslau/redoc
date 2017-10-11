import * as React from 'react';
import styled from 'styled-components';
import { ResponseView } from './Response';
import { ResponseModel } from '../../services/models';

const ResponsesHeader = styled.h3`
  font-size: 18px;
  padding: 0.2em 0;
  margin: 3em 0 1.1em;
  color: #253137;
  font-weight: normal;
`;

export class ResponsesList extends React.PureComponent<{
  responses: ResponseModel[];
}> {
  render() {
    const { responses } = this.props;

    if (!responses || responses.length === 0) return null;

    return (
      <div>
        <ResponsesHeader> Responses </ResponsesHeader>
        {responses.map(response => {
          return <ResponseView key={response.code} response={response} />;
        })}
      </div>
    );
  }
}
