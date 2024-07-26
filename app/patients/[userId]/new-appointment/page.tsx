import Link from "next/link"
import Image from "next/image"
import PatientForm from "@/components/forms/PatientForm"
import { getPatient } from "@/lib/actions/patient.actions";
import * as Sentry from '@sentry/nextjs'
import AppointmentForm from "@/components/forms/AppointmentForm";




export default async function NewAppointment({ params: { userId } }: SearchParamProps) {
    const patient = await getPatient(userId);

    
    Sentry.metrics.set("user_view_new-appointment", patient.name);

  return (
   <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[860px] flex-1 justify-between">
        <Image 
          src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="patient"
          className="mb-12 h-10 w-fit"
        />

        <AppointmentForm
           userId={userId}
           type="create"
           patientId={patient.$id}
        />

          <p className="copyright mt-10 py-12">
            © 2024 CarePulse
          </p>
      </div>
    </section>

    <Image 
    src="/assets/images/appointment-img.png"
    height={1000}
    width={1000}
    alt="appointment"
    className="side-img max-w-[390px] bg-bottom"
    />
   </div>
  )
} 