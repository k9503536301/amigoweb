import React from 'react';
import { ServiceConsumer } from '../../service-context';

const withNewsApi = () => (Wrapped) => {

    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (newsApi) => {
                        return (<Wrapped {...props}
                                         newsApi={newsApi}/>);
                    }
                }
            </ServiceConsumer>
        );
    }
};

export default withNewsApi;