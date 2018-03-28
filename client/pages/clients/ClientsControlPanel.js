import React, { Component } from 'react';
import UIPack from '../../../imports/ui/UIPack';
import { connect } from 'react-redux';
import {
  changeClient,
  toggleShowAddClientPopup,
  removeClient
} from '../../lib/actions/clients';
