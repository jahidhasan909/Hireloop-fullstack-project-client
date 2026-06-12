import { stripe } from '@/lib/Stripe/stripe'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Success({ searchParams }) {
  // Next.js 15+ এ searchParams একটি Promise, তাই await করা সঠিক আছে
  const params = await searchParams
  const session_id = params?.session_id

  if (!session_id) {
    throw new Error('Please provide a valid session_id (`cs_test_...`)')
  }

  // Stripe থেকে ডাটা রিট্রিভ করা হচ্ছে
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  const status = session?.status
  const customerEmail = session?.customer_details?.email

  // সেশন কমপ্লিট না হয়ে ওপেন থাকলে হোমপেজে রিডাইরেক্ট করুন
  if (status === 'open') {
    return redirect('/')
  }

  // পেমেন্ট সফল হলে
  if (status === 'complete') {
    
    // 💡 টিপস: আপনি যদি আপনার ডাটাবেজ (যেমন Prisma/MongoDB) আপডেট করতে চান, 
    // তবে এই লাইনে আপনার DB Logic রান করতে পারেন। যেমন:
    // await updateUserSubscription(customerEmail, session.id);

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center shadow-xl">
          
          {/* গ্রিন সাকসেস আইকন */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Payment Successful!
          </h1>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
            We appreciate your business! A confirmation email and invoice will be sent shortly to{' '}
            <span className="font-semibold text-slate-700 dark:text-slate-200">{customerEmail || 'your email'}</span>.
          </p>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-8 text-xs text-left space-y-2 border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between">
              <span className="text-slate-400">Order Status:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold uppercase">{status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Session ID:</span>
              <span className="text-slate-600 dark:text-slate-300 truncate max-w-[180px]">{session_id}</span>
            </div>
          </div>

          <div className="space-y-3">
            <Link 
              href="/" 
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all shadow-md"
            >
              Go to Dashboard
            </Link>
            
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Have questions? Email us at{' '}
              <a href="mailto:support@example.com" className="text-blue-500 hover:underline">
                support@example.com
              </a>
            </p>
          </div>

        </div>
      </div>
    )
  }

  // যদি স্ট্যাটাস complete বা open কোনোটিই না হয় (যেমন expired)
  return redirect('/subscription')
}