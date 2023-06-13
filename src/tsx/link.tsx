import * as React from 'react';

export type TLinkProps = {
    
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type TLinkStatus = {
    status: 'normal' | 'hover'
};
export class Link extends React.Component<TLinkProps, TLinkStatus> {

    static defaultProps: Partial<TLinkProps> = {
        href: 'javascript:;',
        target: '_self',
        children: '按钮'
    }

    state: Readonly<TLinkStatus> = {
        status: 'normal'
    };

    render(): React.ReactNode {
        const {
            className,
            children,
            ...aProps
        } = this.props;
        const {
            status
        } = this.state;
        
        return <a className={`${className ? className + ' ' : ''}${status}`} {...aProps}
            onMouseEnter={() => { this.setState({ status: 'hover' }); }}
            onMouseLeave={() => { this.setState({ status: 'normal' }); }}
        >
            {children}
        </a>;
    }
    
}
