/*
Copyright 2016 Mozilla

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

import * as EffectTypes from '../constants/effect-types';

export function setSessionKey(key, value) {
  return {
    type: EffectTypes.SET_SESSION_KEY,
    key,
    value,
  };
}

export function deleteSessionKey(key) {
  return {
    type: EffectTypes.DELETE_SESSION_KEY,
    key,
  };
}

export function sessionRestoreBrowserWindowAppState(serialized) {
  return {
    type: EffectTypes.SESSION_RESTORE_BROWSER_WINDOW_APP_STATE,
    serialized,
  };
}

export function startSavingBrowserWindowAppState() {
  return {
    type: EffectTypes.START_SAVING_BROWSER_WINDOW_APP_STATE,
  };
}

export function stopSavingBrowserWindowAppState() {
  return {
    type: EffectTypes.STOP_SAVING_BROWSER_WINDOW_APP_STATE,
  };
}

export function notifyBrowserWindowAppStateWatched() {
  return {
    type: EffectTypes.NOTIFY_BROWSER_WINDOW_APP_STATE_WATCHED,
  };
}

export function notifyBrowserWindowAppStateNotWatched() {
  return {
    type: EffectTypes.NOTIFY_BROWSER_WINDOW_APP_STATE_NOT_WATCHED,
  };
}

export function notifyBrowserWindowAppStateSaved() {
  return {
    type: EffectTypes.NOTIFY_BROWSER_WINDOW_APP_STATE_SAVED,
  };
}

export function notifyBrowserWindowAppStateDestroyed() {
  return {
    type: EffectTypes.NOTIFY_BROWSER_WINDOW_APP_STATE_DESTROYED,
  };
}
