import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.loader}>
            <Oval
                height={200}
                width={200}
                color="#3f51b5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#3f51b5"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
};
// робимо спинер