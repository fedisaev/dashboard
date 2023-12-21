import {Status} from "../../types/enums";

export const getBorderStyle = (trimmedUrl: string) => {
    switch (trimmedUrl) {
        case 'market.company.com':
            return {borderLeft: '4px solid #E14165'};
        case 'delivery.company.com':
            return {borderLeft: '4px solid #C2C2FF'};
        case 'games.company.com':
            return {borderLeft: '4px solid #8686FF'};
        default:
            return {};
    }
};

export const getStatusStyle = (status: string) => {
    switch (status) {
        case Status.DRAFT:
            return { color: '#5C5C5C' };
        case Status.ONLINE:
            return { color: '#1BDA9D' };
        case Status.PAUSED:
            return { color: '#FF8346' };
        case Status.STOPPED:
            return { color: '#FE4848' };
        default:
            return {};
    }
};

export const getButtonText = (status: string) => {
    switch (status) {
        case Status.DRAFT:
            return 'Finalize';
        default:
            return 'Results';
    }
};

export const getButtonStyle = (buttonText: string) => {
    if (buttonText === 'Finalize') {
        return { background: '#7D7D7D' };
    }
    return {};
};


export const trimUrlPrefix = (url: string): string => {
    return url ? url.replace(/^(https?:\/\/(www\.)?)/, '') : '';
};