import PageFooter from '../../components/page/footer';
import PageHeader from '../../components/page/header';

import type { PropsWithChildren } from 'react';

type PageHeaderLayoutProps = PropsWithChildren & {
    headerTransparent?: boolean;
    headerNavTextClass?: string;
    headerNavHoverClass?: string;
    headerCtaTextClass?: string;
    headerCtaHoverClass?: string;
};

export default function PageHeaderLayout({ children, headerTransparent = false, headerNavTextClass, headerNavHoverClass, headerCtaTextClass, headerCtaHoverClass }: PageHeaderLayoutProps) {
    return (
        <>
            <PageHeader logoUrl='' transparent={headerTransparent} navTextClass={headerNavTextClass} navHoverClass={headerNavHoverClass} ctaTextClass={headerCtaTextClass} ctaHoverClass={headerCtaHoverClass} />
            {children}
            <PageFooter />
        </>
    );
}
