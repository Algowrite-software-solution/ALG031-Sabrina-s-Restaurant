import { Toaster } from '@/components/ui/sonner';
import PageLayoutTemplate from './page/page-header-layout';

import type { PropsWithChildren } from 'react';

type PageLayoutProps = PropsWithChildren & {
    headerTransparent?: boolean;
    headerNavTextClass?: string;
    headerNavHoverClass?: string;
    headerCtaTextClass?: string;
    headerCtaHoverClass?: string;
};

export default ({ children, headerTransparent = false, headerNavTextClass, headerNavHoverClass, headerCtaTextClass, headerCtaHoverClass }: PageLayoutProps) => (
    <PageLayoutTemplate headerTransparent={headerTransparent} headerNavTextClass={headerNavTextClass} headerNavHoverClass={headerNavHoverClass} headerCtaTextClass={headerCtaTextClass} headerCtaHoverClass={headerCtaHoverClass}>
        {children}
        <Toaster />
    </PageLayoutTemplate>
);
