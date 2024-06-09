"use client"

import * as React from 'react';

interface Session {
    idToken: string;
    uid: string;
    expires: number;
};

export type SessionContextType = {
    current: Session;
    newSession: (curr: Promise<Session>) => void;
    verifySession: () => void;
};

export const SessionContext = React.createContext<SessionContextType | null>(null);

const SessionProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [current, setSession] = React.useState<Session>({
    idToken: "",
    uid: "",
    expires: 0,
  });
  const newSession = async (curr: Promise<Session>) => {
    const headers: Headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('Authorization', `Bearer ${(await curr).idToken}`);
    
    const req: RequestInfo = new Request('https://c719-114-122-106-87.ngrok-free.app/api/session', {
        method: 'GET',
        headers: headers,
    })
    const res = fetch(req)
        .then(res => {return res.json()})
        .then((session: Session) => {
            const temp: Session = {
                idToken: session.idToken,
                uid: session.uid,
                expires: session.expires,
            }
            return temp;
        });
    setSession(await res);
  }
  const verifySession = () => {
    const headers: Headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('Authorization', `Bearer ${current}`);
    
    const req: RequestInfo = new Request('https://c719-114-122-106-87.ngrok-free.app/api/session', {
        method: 'GET',
        headers: headers,
    })
    const res = fetch(req)
        .then(res => {return res.json()})
        .then(data => {
            if(data.error == `error verifying ID token: ID token has expired at: ${current}`){
                return null;
            }
            else {
                const temp: Session = {
                    idToken: data.idToken,
                    uid: data.uid,
                    expires: data.expires,
                }
                return temp;
            }
        });
    if(!res){
        setSession({
            idToken: "",
            uid: "",
            expires: 0,
        });
    }
  }
  return (
      <SessionContext.Provider value={{ current, newSession, verifySession }}>
      { children }
      </SessionContext.Provider>
  );
}

export default SessionProvider;