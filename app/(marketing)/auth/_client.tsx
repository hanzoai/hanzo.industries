"use client";

import { useEffect } from "react";
import { Button } from '@hanzo/ui'
import site from "@/site.config";
import { useAnalytics } from "@hanzo/event/react";

/**
 * Sign-in lives on hanzo.ai (site.try): this site keeps no session of its own,
 * so /login and /auth forward there, carrying the visitor across the hop.
 */
export default function PageClient() {
  const stream = useAnalytics();
  useEffect(() => {
    window.location.replace(stream.link(site.try.href));
  }, [stream]);

  return (
    <div className="hz-min-h-screen hz-row hz-ai-center hz-jc-center hz-px-4 hz-bg">
      <div className="hz-mw-sm hz-w-full hz-stack-6 hz-align-center">
        <div>
          <h2 className="hz-mt-5 hz-t-3xl hz-w-bold hz-fg">
            Sign in to Hanzo
          </h2>
          <p className="hz-mt-4 hz-fg">
            You sign in on hanzo.ai. Taking you there now.
          </p>
        </div>
        <div>
          <a href={site.try.href}>
            <Button className="hz-w-full hz-bg-inverse hz-hoverable">
              {site.try.label}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
