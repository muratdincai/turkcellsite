import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { Project } from '@/components/Project/Project';
import { Demo } from '@/components/Demo/Demo';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { Screenshots } from '@/components/Screenshots/Screenshots';
import { Team } from '@/components/Team/Team';
import { Vision } from '@/components/Vision/Vision';
import { ContactFooter } from '@/components/ContactFooter/ContactFooter';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Project />
            <Demo />
            <Testimonials />
            <Screenshots />
            <Team />
            <Vision />
            <ContactFooter />
        </>
    );
}
