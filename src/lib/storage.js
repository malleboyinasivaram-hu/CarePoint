import { doctors, services } from "../data/seed";
const KEYS = {users:"carepoint_users",session:"carepoint_session",history:"carepoint_login_history",appointments:"carepoint_appointments",doctors:"carepoint_doctors",services:"carepoint_services"};
export function read(key, fallback=[]) { try { const v=localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } }
export function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
export function initializeStorage() {
 if(!localStorage.getItem(KEYS.users)) write(KEYS.users,[{id:"admin-1",name:"Administrator",email:"admin@carepoint.com",password:"Admin123",role:"admin"}]);
 if(!localStorage.getItem(KEYS.doctors)) write(KEYS.doctors,doctors);
 if(!localStorage.getItem(KEYS.services)) write(KEYS.services,services);
 for(const k of [KEYS.history,KEYS.appointments]) if(!localStorage.getItem(k)) write(k,[]);
}
export const getUsers=()=>read(KEYS.users,[]);
export const saveUsers=v=>write(KEYS.users,v);
export const getDoctors=()=>read(KEYS.doctors,doctors);
export const saveDoctors=v=>write(KEYS.doctors,v);
export const getServices=()=>read(KEYS.services,services);
export const saveServices=v=>write(KEYS.services,v);
export const getAppointments=()=>read(KEYS.appointments,[]);
export const saveAppointments=v=>write(KEYS.appointments,v);
export const getHistory=()=>read(KEYS.history,[]);
export const getSession=()=>read(KEYS.session,null);
export function setSession(user){write(KEYS.session,user);}
export function clearSession(){localStorage.removeItem(KEYS.session);}
export function addLoginHistory(user){const history=getHistory();history.unshift({id:Date.now(),name:user.name,email:user.email,role:user.role,datetime:new Date().toLocaleString()});write(KEYS.history,history);}
export function createAppointment(item){const all=getAppointments();all.unshift(item);saveAppointments(all);}
